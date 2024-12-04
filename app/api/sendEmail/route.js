import nodemailer from 'nodemailer';

export async function POST(req) { 

  try {
    const { name, email, phone, message } = await req.json();
    
    if ( !name || !email || !message ) {
      return new Response( JSON.stringify({ message: 'All fields are required' }),
      { 
        status: 400, 
      });
    };
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', 
      port: 465, 
      secure: true, 
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER, 
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS, 
      },
      tls: {
        family: 4,
      }
    });
    
    const mailFromAPIToVIP = {
      from: '"JaviGigante" <javigigante.dev@gmail.com>', 
      to: 'javigigante.dev@gmail.com', 
      subject: `${name} quiere contactar contigo!`, 
      text: `${name}, con email: ${email} y con tf: ${phone}, te ha mandado un mensaje desde tu web: \n\n${message}`,
    };

    const mailFromAPIToSender = {
      from: '"JaviGigante" <javigigante.dev@gmail.com>', 
      to: email, 
      subject: '¡Gracias por tu mensaje!', 
      text: `Hola ${name},\n\nGracias por contactarme. Esto es lo que has enviado:\n\n${message}\n\nTe responderé a la mayor brevedad.\n\nSaludos,\nJaviGigante`,
    };
    
    await transporter.sendMail( mailFromAPIToSender );
    await transporter.sendMail( mailFromAPIToVIP );

    return new Response( JSON.stringify({ message: 'Email sent successfully' }), 
    {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to send email', error: error.message }),
      { 
        status: 500, 
      }
    );
  }
}


  
  