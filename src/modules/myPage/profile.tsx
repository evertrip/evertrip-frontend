import { Container,Box,Button,Typography,TextField } from "@mui/material";
import React,{useCallback, useEffect, useState,useRef} from "react";

const styles = {
  container: ({
    display: 'flex',
    width: '100%',
    alignItems: "center",
    flexDirection: 'column',
    margin: 0,
    padding: 15,
    border: '1px solid grey',
  }),
  photo: ({
    margin: 5,
    cursor: 'pointer'
  }),
  name_email: ({
    display: 'flex',
    width: '80%',
    justifyContent: 'space-between',
    margin: 5,
  }),
  description: ({
    width: '80%',
  }),
  editbutton: ({
    marginTop: 5,
  }),
};

interface EditForm {
  nickName: string,
  description: string,
  fileId: number | null,
  profileImage: string | null
}


function Profile() {
  const [email, setEmail] = useState<string | null>(null);
  const [profile , setProfile] = useState<EditForm>({
    nickName: "",
    description: "",
    fileId: null,
    profileImage: ""
  });
  const [initialProfile, setInitialProfile] = useState<EditForm | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  

  useEffect(() => {
    // member에 대한 프로필 조회 api 요청하기

    const data = {
      "success": true,
      "content": [
          {
              "memberId": 2,
              "nickName": "김강욱",
              "description": "기본 자기 소개글을 작성해주시기 바랍니다.",
              "createdAt": "2024-04-26 22:21:55",
              "updatedAt": "2024-04-26 22:21:55",
              "profileImage": "https://ever-trip-bucket.s3.ap-northeast-2.amazonaws.com/basic_user_image.jpg",
              "email": "rlarkddnr1686@naver.com"
          }
      ],
      "errorResponse": null
  }


    const fetchedProfile = {
      nickName: data.content[0].nickName,
      description: data.content[0].description,
      profileImage: data.content[0].profileImage,
      fileId: null
    };

    setEmail(data.content[0].email);
    setProfile(fetchedProfile);
    setInitialProfile(fetchedProfile);
  },[])

  const isProfileChanged = useCallback(() => {
    return JSON.stringify(profile) !== JSON.stringify(initialProfile);
  }, [profile, initialProfile]);

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleEdit = useCallback(() => {
      console.log(profile);

      // axios 요청
  }, [profile])

  return (
    <Container
      sx={{
        maxWidth: "1150px",
        marginTop: "60px",
        "@media (max-width: 600px)": {
          marginTop: "30px",
        },
      }}
    >
    <Box sx={styles.container}>
        <Typography display="block" variant="h3" color="text.secondary">
          프로필 수정
        </Typography>
      <Box sx={styles.photo} onClick={handlePhotoClick}>
        {profile.profileImage ? (
              <img src={profile.profileImage} alt="Profile" style={{ width: '150px', height: '150px' }} />
            ) : (
              <Typography>프로필 이미지 업로드</Typography>
            )}
            <input
              type="file"
              style={{ display: 'none' }}
              ref={fileInputRef}
              // onChange={handleImageChange}
              accept="image/*"
            />
      </Box>
      <Box sx={styles.name_email}>
        <Box sx={{width:'45%'}}>
        <Typography variant="subtitle1" gutterBottom>이메일(수정불가)</Typography>
        <TextField
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            sx={{width:'100%', background:'#f0efef'}}
            value={email}
          />
        </Box>
        <Box sx={{width:'45%'}}>
          <Typography variant="subtitle1" gutterBottom>닉네임</Typography>
          <TextField variant="outlined" 
            sx={{width:'100%'}}
            value={profile.nickName}
            onChange={(e) => setProfile(prev => ({ ...prev, nickName: e.target.value }))}
          />
        </Box>
      </Box>
      <Box sx={styles.description}>
      <Typography variant="subtitle1" gutterBottom>자기 소개글</Typography>
      <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            inputProps={{ style: { height: 100, overflow: 'auto' } }}
            value={profile.description}
            onChange={(e) => setProfile(prev => ({ ...prev, description: e.target.value }))}
          />
      </Box>
      <Box sx={styles.editbutton}>
        <Button variant="contained" onClick={handleEdit} disabled={!isProfileChanged()}>EditButton</Button>
      </Box>
    </Box>
    </Container>
  );
}

export default Profile;