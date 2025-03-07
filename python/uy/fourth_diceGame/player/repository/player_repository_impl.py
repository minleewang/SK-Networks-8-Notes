from player.entity.player import Player
from player.repository.player_repository import PlayerRepository


class PlayerRepositoryImpl(PlayerRepository):

    __instance = None
    __playerNameList = []

    #MIN = 0
    #MAX = 2

    def __new__(cls):
        if cls.__instance is None:
            cls.__instance = super().__new__(cls)

        return cls.__instance

    @classmethod
    def getInstance(cls):
        if cls.__instance is None:
            cls.__instance = cls()

        return cls.__instance
# 여기까지 Single-ton pattern

    #def __processUserInput(self):
    #    userInputName = input("생성하고자 하는 이름을 입력하세요: ")
    #    return userInputName

    def createName(self, playerName):
        player = Player(playerName)
        self.__playerNameList.append(player)

    def getUserList(self):
        return self.__playerNameList

    def acquirePlayerNameList(self):
        return self.__playerNameList