import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

// Define the attributes for the liked songs
interface LikedSongsAttributes {
  id: number;
  userId: number;
  title: string;
  artist: string;
}

// Define the optional attributes when creating a new song
interface LikedSongsCreationAttributes
  extends Optional<LikedSongsAttributes, "id"> {}

// Define the actual LikedSongs model using sequeliez
class LikedSongs
  extends Model<LikedSongsAttributes, LikedSongsCreationAttributes>
  implements LikedSongsAttributes
{
  public id!: number;
  public userId!: number;
  public title!: string;
  public artist!: string;
}

// Initialize the model with sequelize
LikedSongs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, // ensures every song is linked to a user
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Song title required
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false, // Artist name required
    },
  },
  {
    sequelize, // Pass the sequelize instance
    tableName: "liked_songs", // Defines the table name in the database
  }
);

export default LikedSongs;
