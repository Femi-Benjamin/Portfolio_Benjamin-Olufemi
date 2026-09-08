import React from "react";

/**
 * Global SVG optical filters for LiquidGlass refraction, distortion, and specular reflections.
 * Inspired by liquidglass.js and Apple optical glass shaders.
 */
export const LiquidGlassFilter = () => {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -left-[9999px] -top-[9999px] h-0 w-0 overflow-hidden"
    >
      <defs>
        {/* Subtle Liquid Refraction Filter */}
        <filter id="liquid-glass-subtle" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.015"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Interactive / Hero Liquid Glass Distortion Filter */}
        <filter id="liquid-glass-hero" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.01 0.02"
            numOctaves="3"
            result="liquidWave"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="liquidWave"
            scale="8"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feSpecularLighting
            in="displaced"
            surfaceScale="2"
            specularConstant="0.8"
            specularExponent="20"
            lightingColor="#ffffff"
            result="specularLight"
          >
            <fePointLight x="150" y="60" z="200" />
          </feSpecularLighting>
          <feComposite
            in="SourceGraphic"
            in2="specularLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="0.5"
            k4="0"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LiquidGlassFilter;
