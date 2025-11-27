import { useState, useEffect } from 'react';

/**
 * Protected email link component to reduce spam/bot harvesting
 * Email is constructed client-side to avoid plain text in HTML
 */
const EmailLink = ({ className = '', children }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Construct email on client-side to avoid bots scraping HTML
    const user = 'contact';
    const domain = 'touline-co';
    const tld = 'fr';
    setEmail(`${user}@${domain}.${tld}`);
  }, []);

  if (!email) {
    return <span className={className}>Chargement...</span>;
  }

  return (
    <a
      href={`mailto:${email}`}
      className={className}
      aria-label="Envoyer un email à Touline & Co"
    >
      {children || email}
    </a>
  );
};

export default EmailLink;
