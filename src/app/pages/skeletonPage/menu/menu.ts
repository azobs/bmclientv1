export interface Menu{
  id?:string;
  title?:string;
  icon?:string;
  url?:string;
  visible?: boolean;
  sousMenu?:Array<Menu>;
}
