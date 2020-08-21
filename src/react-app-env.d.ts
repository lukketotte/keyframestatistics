/// <reference types="react-scripts" />

//Removes issues with importing png files
declare module '*.png' {
  const value: any;
  export = value;
}
