import React from "react";

function App() {
  return (
   <>
   <section className="relative">
<div className="flex flex-col m-2 place-items-center">
<div className="p-5" >
<img class='h-60 w-64 rounded-full' src="./imgs/mysnap.jpg" alt=""/>           
</div>
  <p class='text-lg text-center lg:text-left break-words '>I'm a computer systems engineer trying to contribute to the advancement of technology one project at a time.</p>
  <p class='text-lg text-center lg:text-left mb-10 break-words '>Some technologies I use often are React, React Native, Django, Python, JavaScript and PHP.</p>
  <div className="flex gap-16 mb-10">
    <div className="flex flex-col">
    <p class='font-bold'>Follow me on</p>
    <a href="https://github.com/thetaleofAj" class='text-center underline' target="_blank" rel="noreferrer noopener">Github</a>
    <a href="https://twitter.com/_andysonm_" class='text-center underline' target="_blank" rel="noreferrer noopener">Twitter</a>
    <a href="https://www.linkedin.com/in/andyson-mupeta-339778200/" class='text-center underline' target="_blank" rel="noreferrer noopener">LinkedIn</a>
    </div>

    <div className="flex flex-col">
    <h3 class='font-bold'>Read my blogs on</h3>
    <a href="https://andysonm.hashnode.dev/" class='text-center underline' target="_blank" rel="noreferrer noopener">Hashnode</a>
    <a href="https://medium.com/@mupeta.andyson" class='text-center underline' target="_blank" rel="noreferrer noopener">Medium</a>
      </div>
  </div>
  <div className="flex flex-col mb-10">
  <p class='font-bold text-center'>Check out my projects(sorted from most recent)</p>
  <a href="https://course-assist.com/" class='text-center underline' target="_blank" rel="noreferrer noopener">Course Assist</a>
  <a href="https://github.com/ThetaleofAj/unza-smart-car-parking-system" class='text-center underline' target="_blank" rel="noreferrer noopener">UNZA smart car parking system</a>
  </div>
  <p class="text-center" >Got questions? Drop me an email at <a href="mailto: andysonmupeta2@gmail.com" class='text-center underline' target="_blank" rel="noreferrer noopener"><span class="underline">andysonmupeta2@gmail.com</span></a></p>
</div>
   </section>
   </>
  );
}

export default App;
