import React,{useEffect,useState} from 'react'


const BetContext = React.createContext()

class BetProvider extends React.Component {

  state = {
    users:[],
    selected:[],
    query:""

  }




  componentDidMount(){
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json')
    .then(res => res.json())
    .then(data=> {
      this.setState({
        users:data,
      })
    })
  }

  updateText = (query) =>{
    this.setState({query:query.trim()})
    console.log(`I am working ${this.state.query}`)
  }



  render(){

    return(
      <BetContext.Provider value = {{
          ...this.state,
          updateText:this.updateText
        }}
        >
        {this.props.children}
      </BetContext.Provider>
    )
  }
}

const BetConsumer = BetContext.Consumer;
export  {BetProvider,BetConsumer}
