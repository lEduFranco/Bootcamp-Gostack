interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'eduardo33.luiz@gmail.com',
      name: 'Luizin_OBrabo',
    },
  },
} as IMailConfig;
