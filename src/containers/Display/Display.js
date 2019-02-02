import React,{Component} from 'react';
import axios from 'axios';
import Box from '../../components/Box/Box.js';


class Display extends Component {    

    state = {
        posts:[],
        totalPoints: 0,
        isClicked: false,
    };

     componentDidMount()
     {
        
         axios.get('point.json')
             .then(response => {
                this.setState({posts: response.data});
             });    
         //ajax calls here 
     
    }
     
    selectedHandler=(points,e) =>   //id of handler which was selected
    {
        let total = 0;
        // 
        if(e.target.checked)
        {   
            total = this.state.totalPoints + parseInt(points);
        }  
        else
             total = this.state.totalPoints - parseInt(points);
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
                    clicked={(e)=> this.selectedHandler(post.points,e)}
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

// const mapStateToProps = state => {
//     return{
//         p_one: state.p1   //change..  this.props.p_one
//     }; 
// }

// const mapDispatchToProps = dispatch =>
// {
//     return {
//         onP1Added: (p1p)=> dispatch({type: actionTypes.SELECTED_HANDLER,p1points:p1p}),
//         onP1Removed: (p1p)=> dispatch({type: actionTypes.DELETED_HANDLER,p1points:p1p})
//     };
// }

export default Display;