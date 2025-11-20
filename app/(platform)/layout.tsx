import { ClerkProvider } from '@clerk/nextjs';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider afterMultiSessionSingleSignOutUrl="/">
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
