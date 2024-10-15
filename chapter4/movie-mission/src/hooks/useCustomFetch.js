const useCustomFetch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axiosInstance.get(
        `/account/${USER_ID}/favorite/movies?language=ko-KR&page=1&sort_by=created_at.asc`
      );
      setMovies(movies);
    };
    getMovies();
  }, []);
};
