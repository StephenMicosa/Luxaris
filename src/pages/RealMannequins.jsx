import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const photoModules = import.meta.glob("../assets/Photos/**/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

const getPhotosFromFolder = (folderName) =>
  Object.entries(photoModules)
    .filter(([path]) => path.includes(`/Photos/${folderName}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
    .slice(0, 3 || undefined)
    .reduce((poses, [, src], index) => {
      poses[`photo-${index + 1}`] = src;
      return poses;
    }, {});

const REAL_MODELS = [
  {
    id: "real-01",
    name: "Model 01",
    poses: getPhotosFromFolder("woman1"),
  },
  {
    id: "real-02",
    name: "Model 02",
    poses: getPhotosFromFolder("man1"),
  },
  {
    id: "real-03",
    name: "Model 03",
    poses: getPhotosFromFolder("duo1"),
  },
  {
    id: "real-04",
    name: "Model 04",
    poses: getPhotosFromFolder("trio"),
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

function ModelVisual({ src, alt, label }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  }

  return (
    <div
      aria-label={alt}
      role="img"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(145deg, #f8fafc 0%, #f1e7eb 46%, #ffffff 100%)",
        color: "#4a0b19",
        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </div>
  );
}

function ModelCardDesktop({ model, onSelect }) {
  const availablePoses = Object.keys(model.poses);
  const defaultPose = availablePoses[0];
  const [currentPose, setCurrentPose] = useState(defaultPose);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onSelect(model.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentPose(defaultPose);
      }}
      style={{
        cursor: "pointer",
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: "20px",
        border: isHovered ? "1px solid #4a0b19" : "1px solid #eee",
        transition: "all 0.3s ease",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "9/16",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#f9f9f9",
        }}
      >
        <ModelVisual
          src={model.poses[currentPose]}
          alt={`${model.name} ${currentPose}`}
          label={currentPose}
        />

        <div style={{ position: "absolute", inset: 0, display: "flex", zIndex: 10 }}>
          {availablePoses.map((poseKey) => (
            <div
              key={poseKey}
              style={{ flex: 1, height: "100%" }}
              onMouseEnter={() => setCurrentPose(poseKey)}
            />
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "15px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "6px",
            zIndex: 5,
            opacity: isHovered ? 1 : 0,
          }}
        >
          {availablePoses.map((poseKey) => (
            <div
              key={poseKey}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: currentPose === poseKey ? "#4a0b19" : "#ccc",
              }}
            />
          ))}
        </div>
      </div>

      <h3 style={{ marginTop: "15px", fontWeight: "600" }}>{model.name}</h3>
    </button>
  );
}

function ModelCardMobile({ model, onSelect }) {
  const availablePoses = Object.keys(model.poses);
  const carouselRef = useRef(null);
  const [activePoseIdx, setActivePoseIdx] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const idx = Math.round(
        carouselRef.current.scrollLeft / carouselRef.current.offsetWidth
      );
      setActivePoseIdx(idx);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: "15px",
        marginBottom: "20px",
        border: "1px solid #eee",
      }}
    >
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        style={{
          width: "100%",
          aspectRatio: "9/16",
          borderRadius: "12px",
          overflowX: "auto",
          display: "flex",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
        }}
      >
        {availablePoses.map((poseKey) => (
          <div key={poseKey} style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}>
            <ModelVisual
              src={model.poses[poseKey]}
              alt={`${model.name} ${poseKey}`}
              label={poseKey}
            />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <h3 style={{ margin: 0 }}>{model.name}</h3>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          {availablePoses.map((_, i) => (
            <div
              key={i}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: i === activePoseIdx ? "#4a0b19" : "#ddd",
              }}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => onSelect(model.id)}
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#4a0b19",
          color: "#fff",
          border: "none",
          borderRadius: "25px",
        }}
      >
        Selectionner
      </button>
    </div>
  );
}

export default function RealMannequins() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const handleSelect = (id) => navigate(`/paiement?model=${id}&type=Shooting`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Mannequins réels | Luxaris</title>
        <meta
          name="description"
          content="Sélectionnez un mannequin réel pour votre prochaine campagne Luxaris."
        />
      </Helmet>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 20px 50px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1
            style={{
              fontSize: isMobile ? "1.8rem" : "2.8rem",
              fontWeight: "300",
              color: "#111",
              margin: "0 0 10px 0",
              letterSpacing: isMobile ? "4px" : "6px",
              textTransform: "uppercase",
            }}
          >
            nos <span style={{ color: "#4a0b19", fontWeight: "700" }}>Models</span>
          </h1>

          <div
            style={{
              width: "50px",
              height: "1px",
              backgroundColor: "#4a0b19",
              margin: "0 auto 25px auto",
            }}
          />

          <p
            style={{
              fontSize: "1rem",
              color: "#777",
              maxWidth: "450px",
              margin: "0 auto",
              lineHeight: "1.5",
              fontWeight: "400",
              letterSpacing: "0.5px",
            }}
          >
            Sélectionnez le profil réel adapté à votre prochaine campagne.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {REAL_MODELS.map((model) =>
            isMobile ? (
              <ModelCardMobile key={model.id} model={model} onSelect={handleSelect} />
            ) : (
              <ModelCardDesktop key={model.id} model={model} onSelect={handleSelect} />
            )
          )}
        </div>
      </main>
    </>
  );
}
