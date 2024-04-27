import ServerlessHttp from 'serverless-http';
import { createApp } from './server';

export const startApp = ServerlessHttp(createApp('/api'));
