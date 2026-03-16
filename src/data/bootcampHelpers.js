import bootcampsData from './bootcamps.json';

/**
 * Get all bootcamp sessions
 */
export const getAllBootcamps = () => {
  return bootcampsData.bootcamps;
};

/**
 * Get bootcamp by ID
 */
export const getBootcampById = (id) => {
  return bootcampsData.bootcamps.find(bootcamp => bootcamp.id === id);
};

/**
 * Get bootcamps by type (online/offline)
 */
export const getBootcampsByType = (type) => {
  if (type === 'all') return bootcampsData.bootcamps;
  return bootcampsData.bootcamps.filter(bootcamp => bootcamp.type === type);
};

/**
 * Get bootcamps by date range
 */
export const getBootcampsByDateRange = (startDate, endDate) => {
  return bootcampsData.bootcamps.filter(bootcamp => {
    const bootcampStart = new Date(bootcamp.startDate);
    return bootcampStart >= new Date(startDate) && bootcampStart <= new Date(endDate);
  });
};

/**
 * Get bootcamps for a specific month
 */
export const getBootcampsByMonth = (year, month) => {
  return bootcampsData.bootcamps.filter(bootcamp => {
    const bootcampStart = new Date(bootcamp.startDate);
    return bootcampStart.getFullYear() === year && bootcampStart.getMonth() === month;
  });
};

/**
 * Get bootcamps by date (for calendar view)
 */
export const getBootcampsByDate = (date) => {
  const targetDate = new Date(date);
  return bootcampsData.bootcamps.filter(bootcamp => {
    const bootcampStart = new Date(bootcamp.startDate);
    const bootcampEnd = new Date(bootcamp.endDate);
    return targetDate >= bootcampStart && targetDate <= bootcampEnd;
  });
};

/**
 * Get offline bootcamps (for map view)
 */
export const getOfflineBootcamps = () => {
  return bootcampsData.bootcamps.filter(bootcamp => bootcamp.type === 'offline');
};

/**
 * Format currency
 */
export const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

/**
 * Calculate availability percentage
 */
export const getAvailabilityPercentage = (bootcamp) => {
  return Math.round(((bootcamp.capacity - bootcamp.enrolled) / bootcamp.capacity) * 100);
};

/**
 * Check if bootcamp is full
 */
export const isBootcampFull = (bootcamp) => {
  return bootcamp.enrolled >= bootcamp.capacity;
};

/**
 * Check if bootcamp is happening on a specific date
 */
export const isBootcampOnDate = (bootcamp, date) => {
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);
  
  const startDate = new Date(bootcamp.startDate);
  startDate.setHours(0, 0, 0, 0);
  
  const endDate = new Date(bootcamp.endDate);
  endDate.setHours(0, 0, 0, 0);
  
  return targetDate >= startDate && targetDate <= endDate;
};
