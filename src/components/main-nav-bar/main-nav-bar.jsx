// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import {
//   Box,
//   BottomNavigationAction,
//   BottomNavigation,
//   Toolbar,
//   IconButton,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import {
//   PersonOutlineOutlined,
//   Search,
//   LocalMallOutlined,
//   Menu as MenuIcon,
// } from "@mui/icons-material";
// import styles from "../../styles/main-nav-bar.module.css"; // This CSS file is for this component only

// const MainNavbar = () => {
 
//   const [isFixed, setIsFixed] = useState(false);
//   const [value, setValue] = useState(0);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [brandAnchorEl, setBrandAnchorEl] = useState(null);
//   const [clothingAnchorEl, setClothingAnchorEl] = useState(null);
  
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => {
//       const announcementBarHeight =
//         document.querySelector(".announcement-bar")?.offsetHeight || 0;
//       setIsFixed(window.scrollY > announcementBarHeight);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
//   const handleCartToggle = () => setCartOpen(!cartOpen);
//   // const handleProfileMenuOpen = (event) => {
//   //   if (userLoginInfo.isLogin) {
//   //     setAnchorEl(event.currentTarget);
//   //   } else {
//   //     router.push("/login");
//   //   }
//   // };

//   const handleMenuClose = () => setAnchorEl(null);
//   const handleLogout = () => {
//     // Add logout logic here
//     handleMenuClose();
//   };
//   const handleProfile = () => handleMenuClose();
//   const handleClickBrandMenu = (event) => setBrandAnchorEl(event.currentTarget);
//   const handleCloseBrandMenu = () => setBrandAnchorEl(null);
//   const handleClickClothingMenu = (event) => setClothingAnchorEl(event.currentTarget);
//   const handleCloseClothingMenu = () => setClothingAnchorEl(null);
//   const handleReRoute = (value) => router.push(`/collection/${value}`);

//   return (
//     <>
//       <div className={`header site-header ${isFixed ? styles.fixed : ""}`}>
//         <div className="header-container">
//           <div className="filter-toolbar-nav-bar-div">
//             <Toolbar onClick={handleDrawerToggle}>
//               <IconButton color="inherit" aria-label="open drawer" edge="end">
//                 <MenuIcon />
//               </IconButton>
//             </Toolbar>
//           </div>

//           <img
//             src="https://storage.googleapis.com/blog-website-pic-bucket.appspot.com/profileHackathon/postImg-1728384181725-logo-pic.png"
//             alt="logo"
//             className="logo"
//           />

//           <div className="nav-bar">
//             <nav className="nav-auth-route-user1">
//               <ul className="ul-auth-route-user">
//                 <li className="home">
//                   <Link href="/" passHref>
//                     <a style={{ textDecoration: "none" }}>Home</a>
//                   </Link>
//                 </li>
//                 <li className="nav-items">
//                   <Link href={`/collection/newReleases`} passHref>
//                     <a style={{ textDecoration: "none" }}>New Releases</a>
//                   </Link>
//                 </li>
//                 <li className="nav-items" onClick={handleClickClothingMenu}>
//                   <span className="nav-link">Shop Clothing</span>
//                 </li>
//                 <li className="nav-items" onClick={handleClickBrandMenu}>
//                   <span className="nav-link">Shop By Brand</span>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           <Box className="main-icon-box" sx={{ width: { xs: 80, sm: 120 } }}>
//             <BottomNavigation
//               sx={{ backgroundColor: "#EFEFEF" }}
//               showLabels
//               value={value}
//               onChange={(event, newValue) => setValue(newValue)}
//             >
//               <BottomNavigationAction
//                 sx={{ minWidth: 0, padding: 0, fontSize: 13 }}
//                 icon={<PersonOutlineOutlined fontSize="medium" sx={{ color: "#1C1C1C" }} onClick={handleProfileMenuOpen} />}
//               />
//               <BottomNavigationAction
//                 sx={{ minWidth: 0, padding: 0, fontSize: 13, color: "#1C1C1C" }}
//                 icon={<Search fontSize="medium" />}
//               />
//               <BottomNavigationAction
//                 onClick={handleCartToggle}
//                 sx={{ minWidth: 0, padding: 0, fontSize: 13, color: "#1C1C1C" }}
//                 icon={<LocalMallOutlined fontSize="medium" />}
//               />
//             </BottomNavigation>
//           </Box>
//         </div>
//       </div>

//       {/* Dropdown Menus */}
//       <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{ marginTop: "10px" }}>
//         <MenuItem className="profile-menu-item" onClick={handleProfile}>Profile</MenuItem>
//         <MenuItem className="profile-menu-item" onClick={handleLogout}>Logout</MenuItem>
//       </Menu>

//       <Menu anchorEl={brandAnchorEl} open={Boolean(brandAnchorEl)} onClose={handleCloseBrandMenu} sx={{ marginTop: "10px" }}>
//         <MenuItem className="brand-menu-item" onClick={() => handleReRoute("mango")}>Mango</MenuItem>
//         <MenuItem className="brand-menu-item" onClick={() => handleReRoute("zara")}>Zara</MenuItem>
//         <MenuItem className="brand-menu-item" onClick={() => handleReRoute("denim")}>Denim</MenuItem>
//         <MenuItem className="brand-menu-item" onClick={() => handleReRoute("springField")}>Spring Field</MenuItem>
//       </Menu>

//       <Menu anchorEl={clothingAnchorEl} open={Boolean(clothingAnchorEl)} onClose={handleCloseClothingMenu} sx={{ marginTop: "10px" }}>
//         <MenuItem className="clothing-menu-item" onClick={() => handleReRoute("man")}>Man</MenuItem>
//         <MenuItem className="clothing-menu-item" onClick={() => handleReRoute("women")}>Women</MenuItem>
//         <MenuItem className="clothing-menu-item" onClick={() => handleReRoute("kid")}>Kid</MenuItem>
//       </Menu>
//     </>
//   );
// };

// export default MainNavbar;


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./main-nav-bar.module.css";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // triggers slide-down animation
    setMounted(true);
  }, []);

  // close drawer when clicking a link
  const close = () => setOpen(false);

  return (
    <>
      <header className={`${styles.navbar} ${mounted ? styles.slideIn : ""}`}>
        <div className={styles.toolbar}>
          {/* Logo */}
          <div>
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/home/logo.svg"
                alt="Brands Chamber logo"
                className={styles.logo}
              />
            </Link>
          </div>

          {/* Desktop nav links */}
          <nav className={styles.navItems} aria-label="Main navigation">
            <Link href="/"><button type="button">Home</button></Link>
            <Link href="#services"><button type="button">Services</button></Link>
            <Link href="#portfolio"><button type="button">Clients Testimonials</button></Link>
            <Link href="#about"><button type="button">About</button></Link>
            <Link href="#pricing"><button type="button">Pricing</button></Link>
            <Link href="#contact"><button type="button">Contact Us</button></Link>
          </nav>

          {/* Right-side CTA */}
          <div>
            <Link href="#contact">
            <button className={styles.numberButton} type="button">
              Let&apos;s Talk
            </button>
            
            </Link>
          </div>

          {/* Mobile menu icon */}
          <div className={styles.filterToolbarNavBarDiv}>
            <button
              className={styles.headingDrawerIcon}
              aria-label="Menu"
              type="button"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`${styles.drawerOverlay} ${open ? styles.drawerOpen : ""}`}
        onClick={close}
        role="presentation"
      >
        <aside
          className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
          onClick={(e) => e.stopPropagation()}
          aria-label="Mobile menu"
        >
          <div className={styles.drawerHeader}>
            <span className={styles.drawerTitle}>Menu</span>
            <button
              type="button"
              className={styles.drawerClose}
              aria-label="Close menu"
              onClick={close}
            >
              ✕
            </button>
          </div>

          <div className={styles.listRoot}>
            <Link className={styles.drawerLink} href="/" onClick={close}>
              Home
            </Link>
            <Link className={styles.drawerLink} href="#services" onClick={close}>
              Services
            </Link>
            <Link className={styles.drawerLink} href="#portfolio" onClick={close}>
              Clients Testimonials
            </Link>
            <Link className={styles.drawerLink} href="#about" onClick={close}>
              About
            </Link>
            <Link className={styles.drawerLink} href="#pricing" onClick={close}>
              Pricing
            </Link>
            <Link className={styles.drawerLink} href="#contact" onClick={close}>
              Contact Us
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
