import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/core/Menu"
import MoreVertIcon from "@material-ui/icons/MoreVert"

class Header extends React.Component {
  render() {
    const menuButton = {
      color: "#fff",
    }

    return (
      <AppBar position="fixed">
        <Toolbar variant="regular">
          <IconButton style={menuButton} color="inherit" aria-label="Menu">
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Recreatazm
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header