export function formatClasses(...classes:string[]){
  return classes.filter(name => name ).join(' ')
}