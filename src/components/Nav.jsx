import { Link } from "react-router";
import { Box, Button } from "@mui/material";


const Nav = () => {
  return (
    <Box component="nav" sx={{  mt: 2, display: "flex", gap: 2 }}>
      <Button component={Link} to="/" variant="text">
        Home
      </Button>


      <Button component={Link} to="/profile" variant="text">
        Profile
      </Button>
    </Box>
  );
};


export default Nav;




import { Link } from "react-router";
import { Box, Button } from "@mui/material";


const Nav = () => {
  return (
    <Box component="nav" sx={{  mt: 2, display: "flex", gap: 2 }}>
      <Button component={Link} to="/" variant="text">
        Home
      </Button>


      <Button component={Link} to="/profile" variant="text">
        Profile
      </Button>
    </Box>
  );
};


export default Nav;




import { Link } from "react-router";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";


const Nav = () => {
  return (
    <nav>
      <List sx={{ display: "flex", gap: 2 }}>
        <ListItem disablePadding sx={{ width: "auto" }}>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding sx={{ width: "auto" }}>
          <ListItemButton component={Link} to="/profile">
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  );
};


export default Nav;
