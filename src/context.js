import React from 'react'


const BetContext = React.createContext()

class BetProvider extends React.Component {

  state = {
    bets:[],
  }

  render(){

    return(
      <BetContext.Provider>
        {this.props.children}
      </BetContext.Provider>
    )
  }
}

const BetConsumer = BetContext.Consumer;
export  {BetProvider,BetConsumer}
