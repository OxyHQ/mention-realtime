import type { Message, Profile, Conversation } from "@prisma/client";

export interface IMessage extends Message {
	sender: Profile;
	receiver: Profile;
	conversation: Conversation;
}

export type SocketEmitStatusPayload = {
	status: "sending" | "sent" | "seen" | "failed";
	message_id: string;
};

export type SocketEmitMessagePayload = {
	message: IMessage;
};
