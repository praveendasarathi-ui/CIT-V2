export interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
  recordId?: string;
}

interface EmailResult {
  success: boolean;
  method: string;
  error?: string;
  attempt?: number;
}

// Helper function to add delay for retry logic
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// FORMSUBMIT - Primary Service (verified and activated)
export const sendFormsubmitEmail = async (data: EmailData, attempt: number = 1): Promise<EmailResult> => {
  try {
    console.log(`🔄 [ATTEMPT ${attempt}] SENDING EMAIL VIA FORMSUBMIT`);
    console.log('📧 Sending to: centurianit@gmail.com');
    
    const formData = new FormData();
    formData.append('name', `${data.firstName} ${data.lastName}`);
    formData.append('email', data.email);
    formData.append('phone', data.company || 'Not provided');
    formData.append('message', `
Contact Form Submission from CenturianIT Website:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.company || 'Not provided'}
Record ID: ${data.recordId || 'Not available'}

Message:
${data.message}

Submitted at: ${new Date().toLocaleString()}

---
Reply to: ${data.email}
    `);
    formData.append('_subject', `CenturianIT Contact - ${data.firstName} ${data.lastName}`);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');
    formData.append('_autoresponse', 'Thank you for contacting CenturianIT. We will get back to you shortly.');
    formData.append('_next', 'https://centurianit.altanlabs.com/');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // Increased to 15 seconds

    const response = await fetch('https://formsubmit.co/centurianit@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    console.log(`📡 FormSubmit response status: ${response.status}`);

    if (response.ok) {
      const result = await response.json();
      console.log('✅ FORMSUBMIT EMAIL SENT SUCCESSFULLY');
      console.log('📨 Response:', result);
      return { success: true, method: 'formsubmit', attempt };
    } else {
      const errorText = await response.text();
      console.error(`❌ FormSubmit failed (HTTP ${response.status}):`, errorText);
      return { success: false, method: 'formsubmit', error: `HTTP ${response.status}`, attempt };
    }
  } catch (error) {
    console.error(`❌ FormSubmit error (attempt ${attempt}):`, error);
    return { 
      success: false, 
      method: 'formsubmit', 
      error: error instanceof Error ? error.message : 'Unknown error',
      attempt 
    };
  }
};

// GETFORM - Backup Service 1 (reliable free tier)
export const sendGetformEmail = async (data: EmailData, attempt: number = 1): Promise<EmailResult> => {
  try {
    console.log(`🔄 [ATTEMPT ${attempt}] SENDING EMAIL VIA GETFORM`);
    
    const formData = new FormData();
    formData.append('name', `${data.firstName} ${data.lastName}`);
    formData.append('email', data.email);
    formData.append('phone', data.company || 'Not provided');
    formData.append('message', `
Contact Form Submission from CenturianIT Website:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.company || 'Not provided'}
Record ID: ${data.recordId || 'Not available'}

Message:
${data.message}

Submitted at: ${new Date().toLocaleString()}
    `);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    // Using a public Getform endpoint - replace with your own Getform ID if you sign up
    const response = await fetch('https://getform.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      console.log('✅ GETFORM EMAIL SENT SUCCESSFULLY');
      return { success: true, method: 'getform', attempt };
    } else {
      const errorText = await response.text();
      console.error(`❌ Getform failed (HTTP ${response.status}):`, errorText);
      return { success: false, method: 'getform', error: `HTTP ${response.status}`, attempt };
    }
  } catch (error) {
    console.error(`❌ Getform error (attempt ${attempt}):`, error);
    return { 
      success: false, 
      method: 'getform', 
      error: error instanceof Error ? error.message : 'Unknown error',
      attempt 
    };
  }
};

// FORMSPREE - Backup Service 2 (reliable paid/free tier)
export const sendFormspreeEmail = async (data: EmailData, attempt: number = 1): Promise<EmailResult> => {
  try {
    console.log(`🔄 [ATTEMPT ${attempt}] SENDING EMAIL VIA FORMSPREE`);
    
    const formData = new FormData();
    formData.append('name', `${data.firstName} ${data.lastName}`);
    formData.append('email', data.email);
    formData.append('phone', data.company || 'Not provided');
    formData.append('message', `
Contact Form Submission from CenturianIT Website:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.company || 'Not provided'}
Record ID: ${data.recordId || 'Not available'}

Message:
${data.message}

Submitted at: ${new Date().toLocaleString()}
    `);
    formData.append('_replyto', data.email);
    formData.append('_subject', `CenturianIT Contact - ${data.firstName} ${data.lastName}`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    // Using FormSpree - replace with your own FormSpree ID if you sign up
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      console.log('✅ FORMSPREE EMAIL SENT SUCCESSFULLY');
      return { success: true, method: 'formspree', attempt };
    } else {
      const errorText = await response.text();
      console.error(`❌ Formspree failed (HTTP ${response.status}):`, errorText);
      return { success: false, method: 'formspree', error: `HTTP ${response.status}`, attempt };
    }
  } catch (error) {
    console.error(`❌ Formspree error (attempt ${attempt}):`, error);
    return { 
      success: false, 
      method: 'formspree', 
      error: error instanceof Error ? error.message : 'Unknown error',
      attempt 
    };
  }
};

// DIRECT MAILTO - Ultimate Fallback
export const sendViaMailto = (data: EmailData): EmailResult => {
  try {
    console.log('📧 Opening mailto link as fallback...');
    
    const subject = encodeURIComponent(`Contact Form Submission - ${data.firstName} ${data.lastName}`);
    const body = encodeURIComponent(`
Contact Form Submission from CenturianIT Website:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.company || 'Not provided'}
Record ID: ${data.recordId || 'Not available'}

Message:
${data.message}

Submitted at: ${new Date().toLocaleString()}
    `);
    
    const mailtoLink = `mailto:centurianit@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    console.log('✅ Mailto link opened');
    return { success: true, method: 'mailto', attempt: 1 };
  } catch (error) {
    console.error('❌ Mailto error:', error);
    return { 
      success: false, 
      method: 'mailto', 
      error: error instanceof Error ? error.message : 'Unknown error',
      attempt: 1 
    };
  }
};

// MASTER SEND FUNCTION WITH RETRY LOGIC AND MULTIPLE SERVICES
export const sendEmailWithRetry = async (data: EmailData): Promise<EmailResult> => {
  console.log('🚀 === STARTING EMAIL DELIVERY WITH RETRY LOGIC ===');
  console.log('📋 Email data:', { 
    name: `${data.firstName} ${data.lastName}`, 
    email: data.email,
    recordId: data.recordId 
  });

  const maxAttempts = 2; // Reduced to 2 attempts for faster feedback
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    console.log(`\n📬 Trying FormSubmit (attempt ${attempt}/${maxAttempts})...`);
    
    const result = await sendFormsubmitEmail(data, attempt);
    
    if (result.success) {
      console.log(`\n🎉 === EMAIL DELIVERED SUCCESSFULLY ===`);
      console.log(`✅ Service: ${result.method}`);
      console.log(`✅ Attempt: ${result.attempt}`);
      console.log(`✅ Recipient: centurianit@gmail.com`);
      return result;
    }
    
    console.log(`⚠️ FormSubmit attempt ${attempt} failed:`, result.error);
    
    // Wait before next retry
    if (attempt < maxAttempts) {
      const waitTime = 2000; // 2 seconds
      console.log(`⏳ Waiting ${waitTime/1000}s before next attempt...`);
      await delay(waitTime);
    }
  }

  console.log('\n❌ === ALL EMAIL DELIVERY ATTEMPTS FAILED ===');
  console.log('⚠️ FormSubmit did not work after multiple attempts');
  console.log('📧 Offering mailto fallback to user...');
  
  return { 
    success: false, 
    method: 'none', 
    error: 'FormSubmit failed. Please use the email button to send your message.',
    attempt: maxAttempts 
  };
};

// Legacy functions for backward compatibility
export const sendContactEmail = sendFormsubmitEmail;
export const sendNetlifyEmail = sendFormsubmitEmail;
export const sendFallbackEmail = sendFormsubmitEmail;