export function formatClasses(...classes:any[]){
  return classes.filter(name => name ).join(' ')
}