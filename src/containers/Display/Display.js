import React,{Component} from 'react';
import axios from 'axios';
import Box from '../../components/Box/Box.js';
import {Link} from 'react-router-dom';

class Display extends Component {
    state = {
        posts:[],
        totalPoints: 0,
        selectedId: null,
      
     };
    

     componentDidMount()
     {
        
         axios.get('point.json')
             .then(response => {
                this.setState({posts: response.data});
             });    
         //ajax calls here 
     }
     
    selectedHandler=(points) =>   //id of handler which was selected
    {
        
       const total = this.state.totalPoints + points;
       this.setState({totalPoints:total});
       
    }

    render()
    {
        
        let posts = this.state.posts.map(post=>{
            return(
                // <Link to={post.id}> 
                <Box  
                    key={post.id}
                    
                    name={post.name}
                    description={post.description}
                    points={post.points}
                    price={post.price}
                    image_url={post.image_url}
                    source_url={post.source_url}
                    clicked={()=> this.selectedHandler(post.points)}
                    />                    
                // </Link>

            ); 
            
        });



        return(
            <section>
                <h3>total points : {this.state.totalPoints}</h3>
                {posts}

            </section>

        );
    }

};

export default Display;