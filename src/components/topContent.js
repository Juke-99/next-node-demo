import { Card, CardActionArea, CardMedia, CardContent } from "@material-ui/core";

class TopContent extends React.Component {
  render() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia image={this.props.url} title={this.props.title}></CardMedia>

          <CardContent>
            
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default TopContent