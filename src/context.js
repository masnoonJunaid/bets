import React,{useEffect,useState} from 'react'


const BetContext = React.createContext()

class BetProvider extends React.Component {

  state = {
    users:[],
    selected:[],

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



  render(){

    return(
      <BetContext.Provider value = {{
          ...this.state
        }}
        >
        {this.props.children}
      </BetContext.Provider>
    )
  }
}

const BetConsumer = BetContext.Consumer;
export  {BetProvider,BetConsumer}
