export const console = {
  /**
   * *log() is a function that takes any number of arguments and logs them to the console
   * @param {any[]} data - any[] - This is the data that will be logged to the console.
   */
  *log(...data: any[]) {
    global.console.log(...data)
  }
}
