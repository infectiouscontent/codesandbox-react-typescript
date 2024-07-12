// Image file declarations
declare module '*.jpg' {
    const content: string;
    export default content;
  }
  
  declare module '*.jpeg' {
    const content: string;
    export default content;
  }
  
  declare module '*.png' {
    const content: string;
    export default content;
  }
  
  declare module '*.gif' {
    const content: string;
    export default content;
  }
  
  declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  
  // Font file declarations
  declare module '*.woff';
  declare module '*.woff2';
  declare module '*.eot';
  declare module '*.ttf';
  declare module '*.otf';
  
  // Other file types you might use
  declare module '*.pdf'
  declare module '*.mp4'
  declare module '*.webm'
  
  // CSS modules
  declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
  }