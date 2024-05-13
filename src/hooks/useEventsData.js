import useEventsResults from '../state/event-results'

const useEventsData = () => {
 
  const {data, isLoading, error, fetchEvents} = useEventsResults()

  return {
    events: data?._embedded?.events || [],
    page: data?.page || {},
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventsData;
