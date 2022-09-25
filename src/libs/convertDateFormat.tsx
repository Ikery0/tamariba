type Obj = {
  tagFormat: string, 
  displayFormat: string
} 

export const convertDateFormat = (arg: string): Obj => {
  const elms = new GetFormatedElms(arg)
  return elms.obj
}

class GetFormatedElms {
  sourceDate: Date
  formattedYear: string
  formattedMonth: string
  formattedDate: string
  obj: {tagFormat: string, displayFormat: string}

  constructor(arg: string) {
    const parsedDate: number = Date.parse(arg)
    this.sourceDate = new Date(parsedDate)
    this._getElements()
    this._makeObj()
  }

  _getElements() {
    const year = this.sourceDate.getFullYear()
    const month = this.sourceDate.getMonth() + 1 
    const date = this.sourceDate.getDate()

    this.formattedYear = `${year}`
    this.formattedMonth = this._makeTwoDegit(month)
    this.formattedDate = this._makeTwoDegit(date)
  }

  _makeObj() {
    const forTag: string = `${this.formattedYear}-${this.formattedMonth}-${this.formattedDate}`
    const forDisplay: string = `${this.formattedYear}.${this.formattedMonth}.${this.formattedDate}`
  
    this.obj = {
      tagFormat: forTag, 
      displayFormat: forDisplay
    }
  }

  _makeTwoDegit(arg: number): string {
    return arg > 9 ? `${arg}` : `0${arg}`
  }
}
