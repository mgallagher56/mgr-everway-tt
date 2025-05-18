import { useCallback, useMemo, useRef, type FC } from 'react';
import Header from '../components/core/header/EVHeader';
import RegistrationForm from '../components/forms/registrationForm/RegistrationForm';

import Container from '../components/core/layout/container/EVContainer';
import ActionCard from '../components/core/cards/EVActionCard';

const headerImg = {
  src: 'src/assets/images/registration-img.jpg',
  alt: 'Workers in an office using computers at a desk',
};

const Registration: FC = () => {
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const onSubmitForm = useCallback(() => {
    submitButtonRef.current?.click();
  }, []);

  const onCancelRegistration = useCallback(() => {
    alert('Registration cancelled. You can always register later.');
  }, []);

  const buttonProps = useMemo(
    () => ({
      primary: {
        onClick: onSubmitForm,
        children: 'Register',
        id: 'register',
        type: 'submit' as 'submit',
      },
      secondary: {
        onClick: onCancelRegistration,
        children: 'Cancel',
      },
    }),
    [onSubmitForm, onCancelRegistration],
  );

  return (
    <Container background="bg" minW="100vw" paddingInline={0} display="flex" flexDirection="column" minH="100vh">
      <Header
        accentStyle="gradient"
        title="Productivity Pro"
        subtitle="Unlocking the full productivity of every person"
      />
      <main>
        <Container display="flex" maxWidth="xl" justifyContent="center" pt="container">
          <ActionCard
            headerImg={headerImg}
            primaryButtonProps={buttonProps.primary}
            secondaryButtonProps={buttonProps.secondary}
          >
            <RegistrationForm submitRef={submitButtonRef} />
          </ActionCard>
        </Container>
      </main>
    </Container>
  );
};

export default Registration;
