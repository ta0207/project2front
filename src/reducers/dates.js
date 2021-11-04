function datesReducer(state = { start: 0 , end : 0 , roomnum: 0} , action) {
    switch (action.type) {
      case 'DATES':
        return {start : String(action.start),
            end: String(action.end),
            roomnum : Number.parseInt(action.roomnum)
        }
      default:
        return state
    }
  }

  export default datesReducer;