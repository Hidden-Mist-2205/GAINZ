import React from 'react';
import styled from 'styled-components';

export default function ProfileImage() {
  return (
    <ImageWrapper id="profileImage">
      <img
        src="https://s3-alpha-sig.figma.com/plugins/739659977030056719/495/0e42e99a-bd01-4ccb-9e0f-ebec2caf65b6-icon?Expires=1661731200&Signature=dWy6HDrxIiiKovMqbu2tPHQOsncttug0zBfyz56O3XqsxMPgGczzNbWalaAIynN9uFG6BMmlyBF4TKdCNb~zh6DypH39pIiixfyhP2ckoRUo28r-OpRXJTlNB-Lk0sABZ2qbhIFcRcdbJaB66m5DOvq7ofiGY6QAaBaDMUheB3wbK04EjEaKMT9XCOsN2lvnN1WtpJqj8b5A8~tqNxbGdLB7rosn4tHPznIR-W5UqtlGvSTsjN9NL-CrOj~F0D8KJG75w1MAY9UyZ9ugkbcFaMNvbt3MkefsRv4R2gpTKVYSc8z3VNPLbQvlnIUfXbTgwyu3ZqoMhQmFTsSkXGhqcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="profile"
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  align-self: center;
  padding: 20px;
  > img {
    width: 100px;
    height: 100px;
  }
`;
