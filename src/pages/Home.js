import React from 'react';
import GridNoticias from '../components/GridNoticas';

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            news:{},
            isLoading: true
        }
    }
    
    async getNoticias() {
          this.setState({
              isLoading:true
          })
        try {
            const response = await fetch(`https://bailarincosmico.com.ar/clientes/react_medios/wp-json/minimal/v1/noticias`);
            if (!response.ok) {
              throw Error(response.statusText);
            }
            const json = await response.json();
            this.setState({ 
              news: json, 
              isLoading: false
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    componentDidMount() {
        this.getNoticias()
    }

    render(){
        return(
            <div>
                {!this.state.isLoading && <GridNoticias noticias={this.state.news}/>}
            </div>
        )
    }
}

export default Home