export const formatDateForInput = (date: any): string => {
  if (!date) return "";
  
  // If it's already in YYYY-MM-DD format, return it
  if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return date;
  }
  
  // Convert ISO date to YYYY-MM-DD
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";
    
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  } catch (e) {
    return "";
  }
};