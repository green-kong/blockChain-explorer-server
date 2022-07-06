const Txs = (sequelize, DataTypes) => {
  const Tx = sequelize.define(
    'txs',
    {
      blockHash: {
        type: DataTypes.STRING(66),
        allowNull: false,
      },
      blockNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      from: {
        type: DataTypes.STRING(42),
        allowNull: false,
      },
      gas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gasPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hash: {
        type: DataTypes.STRING(66),
        allowNull: false,
      },
      input: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      nonce: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      to: {
        type: DataTypes.STRING(42),
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // 테이블에 대한 설정 지정
      sequelize, // static init의 매개변수와 연결되는 옵션, model/index.js에서 연결
      timestamps: false, // true시 createAt, updateAt 컬럼 추가 각각 생성 및 수정 시 시간 반영
      underscored: false, // 테이블과 컬럼명을 자동으로 캐멀케이스로 만든다.
      modelName: 'txs', // 프로젝트에서 사용하는 모델의 이름
      tableName: 'txs', // 실제 데이터베이스의 테이블 이름
      paranoid: false, // true로 설정 시 데이터 삭제 시 완벽하게 삭제하지 않고 삭제기록
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );

  return Tx;
};

module.exports = Txs;
