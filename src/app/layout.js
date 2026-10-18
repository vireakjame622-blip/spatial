import "./globals.css";

export const metadata = {
  title: "Spatial — Budget-Friendly DIY VR Kit & Controller",
  description: "Spatial: A budget-friendly VR kit designed to introduce students to immersive technology at a fraction of the cost, giving hands-on interactive 3D simulations.",
  keywords: ["Spatial VR", "Cardboard VR", "Controller", "Unity 3D", "STEM Education", "Cambodia"],
  icons: {
    icon: "/images/spatial_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
