from sqlalchemy import Column, Integer, String, Boolean, Enum
from app.db.session import Base
import enum

class UserRole(str, enum.Enum):
    ADMIN = "admin"
    PREMIUM = "premium"
    FREE = "free"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    is_active = Column(Boolean, default=True)
    role = Column(Enum(UserRole), default=UserRole.FREE)
