import { useEffect } from "react";
// import HeaderImage from "../../assets/images/meheader.png";
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import CV from "../../assets/images/linux.jpg";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

import "./header.css";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "Tech Enthusiast",
      "Professional Coder",
      "Flutter Developer",
      "Mobile Application Developer",
    ],
    loop: true,
    typeSpeed: 25,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x1f1f38);
    document.getElementById("header").appendChild(renderer.domElement);

    // Create sphere
    const geometry = new THREE.SphereGeometry(4, 64, 64);

    const material = new THREE.MeshStandardMaterial({
      color: "#ff0000",
      roughness: 0.5,
    });
    const mesh = new THREE.Mesh(geometry, material);
    // Adjust position to the right corner
    // mesh.position.set(10, 0, 0); // Set X, Y, Z coordinates

    scene.add(mesh);

    // Add light to the scene
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    light.intensity = 1.25;
    scene.add(light);

    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 10); // Set position
    scene.add(directionalLight);

    // Set camera position
    camera.position.z = 20;

    // Create orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;

    // Resize event listener
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Adjust sphere scale for mobile and tablet
      const scaleFactor = Math.min(
        window.innerWidth / 600,
        window.innerHeight / 1024
      );
      mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
    };
    window.addEventListener("resize", handleResize);
    // Initial setup for sphere scale
    handleResize();

    // Mouse event listener
    let mouseDown = false;
    window.addEventListener("mousedown", () => (mouseDown = true));
    window.addEventListener("mouseup", () => (mouseDown = false));
    window.addEventListener("mousemove", (e) => {
      if (mouseDown) {
        const rgb = [
          Math.round((e.pageX / window.innerWidth) * 255),
          Math.round((e.pageY / window.innerHeight) * 255),
          150,
        ];
        const newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
        gsap.to(mesh.material.color, {
          r: newColor.r,
          g: newColor.g,
          b: newColor.b,
        });
      }
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {/* Include the 3D background component */}
      {/* <HeaderBackground /> */}
      <header id="header">
        <div className="container header__container">
          {/* <div className="header__profile" data-aos = "fade-in" >
          <img src={HeaderImage} alt="Header Portait" />
        </div> */}
          <h5>Hello Friend!</h5>
          {/* <br/> */}
          <h3 data-aos="fade-up">
            I'm <span className="mr-robot">Muckesh k S</span>
          </h3>
          <h4>
            <span>{text}</span>
            {/* <span>Tech Enthusiast</span> */}
            <Cursor cursorBlinking="false" cursorColor="red" />
          </h4>
          <br />
          <br />
          <h5 className="mr-robot"> Whoami</h5>
          <p data-aos="fade-up">
            I'm a digital alchemist, transforming lines of code into visual
            poetry. With a passion for creativity and an unwavering commitment
            to innovation, I navigate the digital realm, crafting immersive
            experiences that defy convention. Join me on this journey through
            the binary wilderness, where pixels dance to the rhythm of
            imagination.
          </p>
          <div className="header__cta" data-aos="fade-up">
            <a href="#contact" className="btn primary">
              Let's Talk
            </a>
            {/* <a href={CV} download className="btn primary">
              Resume <HiDownload />
            </a> */}
            <a href="#portfolio" className="btn light">
              My Work
            </a>
          </div>
          <div className="header__socials">
            {data.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
