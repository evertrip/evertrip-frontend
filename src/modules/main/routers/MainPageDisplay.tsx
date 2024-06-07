import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, TextField, Tabs, Tab } from '@mui/material';
import SlideCards from "../components/SlideCards";
import GridCards from "../components/GridCards";
import CardContents from '../components/CardContent';
import SearchBoxForTag from "../seachComponent/SearchBoxForTag";
import CustomAxios from "../../config/CustomAxios";

const Main: React.FC = () => {
  const [value, setValue] = useState<string>('best');
  const [searchTags, setSearchTags] = useState<string[]>([]);
  const [searchContent, setSearchContent] = useState<string>('');
  const [best30, setBest] = useState<CardContents[]>([]);
  const [view30, setView] = useState<CardContents[]>([]);
  const [allPosts, setAllPosts] = useState<CardContents[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [bestResponse, viewResponse, allPostsResponse] = await Promise.all([
          CustomAxios('GET', 'http://localhost:8080/api/posts/permit/best30'),
          CustomAxios('GET', 'http://localhost:8080/api/posts/permit/view30'),
          CustomAxios('GET', `http://localhost:8080/api/posts/permit/main/${currentPage}`)
        ]);
        setBest(bestResponse.data.content);
        setView(viewResponse.data.content);
        const newPosts:CardContents[] = allPostsResponse.data.content;
        console.log(allPosts);
        if (newPosts.length === 0) {
          setAllLoaded(true);
        } else {
          setAllPosts(prevPosts => [...prevPosts, ...newPosts]);
          console.log(allPosts);
        }
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (!loading && !allLoaded && window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - (window.innerHeight * 0.1)) {
        console.log("bottom")
        setCurrentPage(currentPage => currentPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, allLoaded]);


  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      console.log(JSON.stringify({
        searchContent,
        searchTags
      }));
    }
  };

  return (
    <Container sx={{ marginTop: { xs: '30px', md: '60px' } }}>
      <Box sx={{ width: '100%', height: '400px', overflow: 'hidden', paddingBottom: '50px' }}>
        <img src="/images/banner.jpg" alt="Main Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '800px',
            padding: '10px',
            borderRadius: '4px',
            margin: '0 auto',
            marginTop: '-200px',
            gap: "10px",
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          <TextField
            sx={{
              backgroundColor : "white",
              width : '100%'
            }}
            variant="outlined"
            placeholder="검색"
            fullWidth
            InputLabelProps={{
              shrink: false // 레이블이 올라가는 효과를 비활성화
            }} 
            value={searchContent}
            onChange={(e) => setSearchContent(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SearchBoxForTag 
            setTags={setSearchTags}
            handleEnterKeyPress={handleKeyPress} />
        </Box>
      </Box>
      <Box sx={{ width: '100%', borderBottom: 1, borderTop: 1, borderColor: 'divider', marginBottom: '30px' }}>
        <Tabs value={value} onChange={(event: React.SyntheticEvent, newValue: string) => setValue(newValue)} 
          textColor="primary" indicatorColor="primary" aria-label="primary tabs example">
          <Tab value="best" label="BEST 30" />
          <Tab value="view" label="VIEW 30" />
        </Tabs>
        {value === 'best' && <SlideCards contents={best30} />}
        {value === 'view' && <SlideCards contents={view30} />}
      </Box>
      <Box>
        <h1>NEW 게시글</h1>
        <GridCards
          contents={allPosts}
        />
      </Box>
    </Container>
  );
};

export default Main;
