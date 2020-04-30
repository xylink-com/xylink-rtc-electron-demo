/**
 * webRTC config file
 * 
 * @authors Luo-jinghui (luojinghui424@gmail.com)
 * @date  2020-01-17 12:04:01
 */

export const ENV: 'PRE' | 'PRD' | 'TXDEV' = 'PRE';
export const THIRD: boolean = false;

const SERVER_MAP: any = {
	TXDEV: {
		wssServer: 'wss://testdevapi.xylink.com',
		httpServer: 'https://testdevapi.xylink.com',
		baseServer: 'https://testdev.xylink.com',
		logServer: 'https://txdevlog.xylink.com'
	},
	PRE: {
		wssServer: 'wss://cloudapi.xylink.com',
		httpServer: 'https://cloudapi.xylink.com',
		baseServer: 'https://cloud.xylink.com',
		logServer: 'https://log.xylink.com'
	},
	PRD: {
		wssServer: 'wss://cloudapi.xylink.com',
		httpServer: 'https://cloudapi.xylink.com',
		baseServer: 'https://cloud.xylink.com',
		logServer: 'https://log.xylink.com'
	}
};

/**
 * 重要提示
 * 重要提示
 * 重要提示
 * PRODUCTION_ACCOUNT需要自行配置
 * 第三方登录，需要填写extId、clientId、clientSecret
 * 此值需要从对接负责人处获取
 * 重要提示
 * 重要提示
 * 重要提示
 */
const PRODUCTION_ACCOUNT = {
	extId: 'ddbbb1b45ff2834056886746cb715fae5079d18c',
	clientId: 'pV2w8Qs8PJkTJDjdO9zUsk2W',
	clientSecret: '38bmDdtinfKzNbrT1Pjer2hNXieUtjTr'
};

const THIRD_ACCOUNT_MAP = {
	TXDEV: {
		extId: 'a8659e5d496283c5d5ed18b9b51f263bfeeebc79',
		clientId: 'HiCI0ujW0pQONPuxmTtld34G',
		clientSecret: '$2a$10$kANFfuVLa2WWGBaJpdTXrejA/x8Nc1vHQyAYkmuhuu4fG/i/Pu37u'
	},
	PRE: PRODUCTION_ACCOUNT,
	PRD: PRODUCTION_ACCOUNT
};

export const SERVER = SERVER_MAP[ENV];
export const ACCOUNT: { extId: string; clientId: string; clientSecret: string } = THIRD_ACCOUNT_MAP[ENV];
