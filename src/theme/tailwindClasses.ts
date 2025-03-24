export const textInputClasses = {
  input: "relative w-full h-10 px-4 pr-12 text-sm transition-all border rounded outline-none focus-visible:outline-none peer border autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-800 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400",
  label: "pointer-events-none absolute top-2.5 left-4 z-[1] px-2 text-sm transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['/\\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-950 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent",
  button: "absolute right-0 top-0 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
}
export const buttonClasses = "text-white bg-sky-800 hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center";
export const cardClasses = "overflow-hidden bg-white rounded shadow-md shadow-slate-200 m-2";
export const selectClasses = {
  input: "relative w-full h-10 px-4 text-sm transition-all bg-white border rounded outline-none appearance-none focus-visible:outline-none peer border autofill:bg-white focus:border-sky-950 focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400",
  label: "pointer-events-none absolute top-2.5 left-3 z-[1] px-2 text-sm transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['/\\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-950 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
}
export const paginationClasses = {
  container: "flex list-none items-center justify-center text-sm text-slate-700 md:gap-1",
  link: "hidden h-10 items-center justify-center rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-sky-950 hover:stroke-sky-800 hover:text-white focus:bg-emerald-50 focus:stroke-sky-800 focus:text-sky-900 focus-visible:outline-none md:inline-flex",
  current: "hidden h-10 items-center justify-center whitespace-nowrap rounded bg-sky-900 px-4 text-sm font-medium text-white ring-offset-2 transition duration-300 hover:bg-sky-950 hover:stroke-sky-800 focus:bg-sky-950 focus-visible:outline-none md:inline-flex"
}
export const checkboxClasses = {
  input: "w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-sky-800 checked:bg-sky-800 checked:hover:border-sky-800 checked:hover:bg-sky-800 focus:outline-none checked:focus:border-sky-950 checked:focus:bg-sky-950 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50",
  label: "pl-2 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:text-slate-400",
}
