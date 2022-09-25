export class GetFormatedElms {
  sourceDate: Date
  formattedYear: string
  formattedMonth: string
  formattedDate: string
  obj: {tagFormat: string, displayFormat: string}

  constructor(arg: string) {
    this.sourceDate = new Date(arg)
    this._getElements()
  }

  _getElements() {
    const year = this.sourceDate.getFullYear()
    const month = this.sourceDate.getMonth() + 1 
    const date = this.sourceDate.getDate()

    this.formattedYear = `${year}`
    this.formattedMonth = this._makeTwoDegit(month)
    this.formattedDate = this._makeTwoDegit(date)
  }

  getConvertedObj() {
    const forTag: string = `${this.formattedYear}-${this.formattedMonth}-${this.formattedDate}`
    const forDisplay: string = `${this.formattedYear}.${this.formattedMonth}.${this.formattedDate}`
  
    return {
      tagFormat: forTag, 
      displayFormat: forDisplay
    }
  }

  _makeTwoDegit(arg: number): string {
    return arg > 9 ? `${arg}` : `0${arg}`
  }
}
