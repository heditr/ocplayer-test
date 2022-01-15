export interface PlayerI {
  play():void,
  load(url:string):Promise<any>,
  pause(): void,
  seek(at:number):void,
  stop():void,
  on(eventName:string, callback:Event):void,
  container:HTMLElement,
}
