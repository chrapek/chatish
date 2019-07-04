const normalizeHistoryMessages = (messages) => {
    return messages.map(({entry, timetoken}) => ({
        content: entry, 
        timetoken
    }));
}

export default normalizeHistoryMessages;