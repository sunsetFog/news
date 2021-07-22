export default {
    // seed: state => state.player.seed,
    seed: function(state){
        console.log('state===',state)
        return state.player.seed
    }
}