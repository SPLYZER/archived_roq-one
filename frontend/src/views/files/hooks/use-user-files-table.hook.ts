export interface useUserFilesTableInterface {
  parseFileSize: (bytes: number) => string;
}

export const useUserFilesTable = (): useUserFilesTableInterface => {
  const roundNumber = (num: number) => Math.round(num * 100) / 100

  const parseFileSize = (bytes: number) => {
    if(bytes <= 1024){
      return `${bytes}B`;
    }else if(bytes <= (1024 * 1024)){
      return `${roundNumber(bytes / 1024)}KB`;
    }else if(bytes <= (1024 * 1024 * 1024)){
      return `${roundNumber(bytes / (1024 * 1024))}MB`;
    }else if(bytes <= (1024 * 1024 * 1024 * 1024)){
      return `${roundNumber(bytes / (1024 * 1024 * 1024))}GB`;
    }
  }

  return {
    parseFileSize,
  }
}