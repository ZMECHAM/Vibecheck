import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface LikedSongsAttributes {
  id: number;
  title: string;
  artist: string;
  assignedUserId: number;
}

interface LikedSongsCreationAttributes extends Optional<LikedSongsAttributes, 'id'> {}

export class LikedSongs
  extends Model<LikedSongsAttributes, LikedSongsCreationAttributes>
  implements LikedSongsAttributes
{
  public id!: number;
  public title!: string;
  public artist!: string;
  public assignedUserId!: number;
}

export function SongFactory(sequelize: Sequelize): typeof LikedSongs {
  LikedSongs.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      assignedUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'liked_songs',
      sequelize,
    }
  );

  return LikedSongs;
}
