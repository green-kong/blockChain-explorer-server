const Blocks = (sequelize, DataTypes) => {
  const Block = sequelize.define(
    'blocks',
    {
      //알아서 id 키 값을 생성하고 기본키로 만듬
      parentHash: {
        type: DataTypes.STRING(66),
        allowNull: false,
      },
      sha3Uncles: {
        type: DataTypes.STRING(66),
        allowNull: false,
      },
      miner: {
        type: DataTypes.STRING(42),
        allowNull: false,
      },
      stateRoot: {
        type: DataTypes.STRING(66),
        allowNull: false,
      },
      transactionsRoot: {
        type: DataTypes.STRING(66),
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gasLimit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gasUsed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      extraData: {
        type: DataTypes.STRING(54),
        allowNull: false,
      },
      mixHash: {
        type: DataTypes.STRING(66),
        allowNull: false,
      },
      nonce: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      baseFeePerGas: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      hash: {
        type: DataTypes.STRING(66),
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      // 테이블에 대한 설정 지정
      sequelize, // static init의 매개변수와 연결되는 옵션, model/index.js에서 연결
      timestamps: false, // true시 createAt, updateAt 컬럼 추가 각각 생성 및 수정 시 시간 반영
      underscored: false, // 테이블과 컬럼명을 자동으로 캐멀케이스로 만든다.
      modelName: 'blocks', // 프로젝트에서 사용하는 모델의 이름
      tableName: 'blocks', // 실제 데이터베이스의 테이블 이름
      paranoid: false, // true로 설정 시 데이터 삭제 시 완벽하게 삭제하지 않고 삭제기록
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );

  return Block;
};

module.exports = Blocks;
