import React, { Component } from 'react'
import axios from 'axios'

export default class Lyrics extends Component {
    
state={
    track:{},
    lyrics:{}
};

    componentDidMount(){
        axios.get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
        .then(res => {
           
            this.setState({track_list: res.data.message.body.lyrics});
           return axios
            .get(
              `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${
                process.env.REACT_APP_MM_KEY
              }`
            );

        })
        .then(res => {
            
        })
        .then(err => {console.log(err)})
    }
    
    
    
    
    
    render() {
        return (
            <div>
                <h5>Lyrics</h5>
            </div>
        )
    }
}
